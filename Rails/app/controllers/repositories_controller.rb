class RepositoriesController < ApplicationController
    def clone_and_build
      @repository = Repository.find(params[:id])
      url = @repository.github_url
  
      # GitHubリポジトリをクローン
      system("git clone #{url} /path/to/destination")
  
      # ビルドコマンドを実行
      system("cd /path/to/destination && your_build_command")
  
      # その他の処理やエラーハンドリングを追加
  
      redirect_to @repository, notice: 'Repository cloned and built successfully.'
    end
  end
  