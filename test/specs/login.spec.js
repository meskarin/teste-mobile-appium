const homeScreen = require("../screens/home.screen");

describe('Access Admin Painel', async () =>{
    it('Should login with valid credentials', async () => {
        
       await homeScreen.goToLogin()
    });
})