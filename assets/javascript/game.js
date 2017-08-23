
       confirm("Are you ready to play?");
    alert("Awesome! Please select a letter");
      var words = ['shepherd', 'calico', 'labrador', 'ragdoll', 'tabby', 'boxer', 'tuxedo', 'terrier',];
      var game = {
        guessed: [],
        left: 9,
        wins: 0,
        losses: 0,
        start: function() {
          this.guessed=[];
          this.complete = false;
          this.word = words[Math.floor(Math.random() * words.length)];
          this.$right = document.getElementById('right');
          this.$wrong = document.getElementById('wrong');
          this.$remain = document.getElementById('remain');
          this.$wins = document.getElementById('wins');
          this.$losses = document.getElementById('losses');
          this.$right.innerHTML = '_'.repeat(this.word.length);
          this.left=9;
          this.$remain.innerHTML=this.left;
          this.$wrong.innerHTML="";
         
        },
        guess: function(letter) {
          if (this.left > 0 && this.complete != true) {
            if (this.word.indexOf(letter) > -1 || this.guessed.indexOf(letter) > -1) {
              this.right(letter);
            } else {
              this.wrong(letter);
            }
          }
        },
        right: function(letter) {
          for(var i = 0; i < this.word.length; i++) {
            if (this.word[i] == letter) {
              var word = this.$right.innerHTML.split('');
              word[i] = letter;
              this.$right.innerHTML = word.join('');
            }
          }
          if (this.$right.innerHTML.indexOf('_') < 0) {
            alert('Toast the dog says "You win!"');
            this.wins = this.wins + 1;
            this.$wins.innerHTML = this.wins;
            this.complete = true;

          }
        },
        wrong: function(letter) {
          this.guessed.push(letter);
          this.$wrong.innerHTML += ' ' + letter;
          this.left--;
          this.$remain.innerHTML = this.left;
          if (this.left < 1) {
            alert('Toast the dog says you lose! ' + this.word);
            this.losses = this.losses + 1;
            this.$losses.innerHTML = this.losses;
            this.complete = false;
          }
        }
      };
      game.start();
      document.onkeyup = function(event) {
        var letter = String.fromCharCode(event.keyCode).toLowerCase();
        game.guess(letter);
      };
      
      function myFunction() {
        game.start();
      }