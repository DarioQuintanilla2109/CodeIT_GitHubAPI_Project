class GitHub{

    constructor(){
        this.client_id = '4ad18ee58c66032b9538';
        this.client_secret = '59c24b2a525090b9a8b857ea1b65f43a42830806';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }



    async getUser(user){

        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this._client_id}&client_secret=${this._client_secret}`);


        //query strings inside 
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this._client_id}&client_secret=${this._client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return{
            profile: profile, 
            repos: repos

        }
    }

}