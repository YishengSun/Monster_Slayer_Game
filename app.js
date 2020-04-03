new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[]
    },
    methods:{
        startGame: function(){
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.gameIsRunning = true;
            this.turns = [];    
        },
        attack: function(){
            var dmg = this.calculationDmg(3,10)
            this.monsterHealth -= dmg;
            this.turns.unshift({
                isPlayer:true,
                text:'Player hits Monster for'+dmg
            })

            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();

        },
        specialAttack: function(){
            var dmg = this.calculationDmg(10,20)
            this.monsterHealth -= dmg;

            this.turns.unshift({
                isPlayer:true,
                text:'Player hits Monster hard for'+dmg
            })

            if(this.checkWin()) {
                return;
            }
            this.monsterAttacks();

        },
        heal: function(){
            if(this.playerHealth <= 90){
                this.playerHealth += 10;
            }
            this.turns.unshift({
                isPlayer:true,
                text:'Player healed for 10'
            })
            this.monsterAttacks();
        },
        giveUp: function(){
            this.gameIsRunning = false;
        },
        monsterAttacks:function(){
            var dmg = this.calculationDmg(5,12)
            this.playerHealth -= this.calculationDmg(5,12);
            this.turns.unshift({
                isPlayer:false,
                text:'Monster hits Player for '+ dmg
            })
            this.checkWin();
        },
        calculationDmg:function(min,max){
            return  Math.max(Math.floor(Math.random() * max) + 1,min);   //随机数是0~10，最低非酋保障3 
        },
        checkWin: function(){
            if (this.monsterHealth <=0){
                if (confirm('You won! New game?')){
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true
            } else if(this.playerHealth <=0){
                if (confirm('You lost! New game?')){
                    this.startGame()
                } else {
                    this.gameIsRunning = false;
                }
                return true
            }
            return false

        }

    }
})