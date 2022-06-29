

class Calculator{
  num1 = ''; 
  num2 = ''; 
  oper = ''; 
  finish = false;
  digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  action = ['+', '-', '×', '÷', '%', '+/-'];
  constructor(input, output){
    input;
    output;
    this.handleEvent = this.handleEvent.bind(this)
  }
  handleEvent(event){
    // кнопка чисел
    for(let i = 0; i < this.digit.length; i++){
      
      if(JSON.parse(event.target.dataset.val).json === +[...this.digit][i] 
      || JSON.parse(event.target.dataset.val).json === [...this.digit][i] ){
        if(this.num2 === '' && this.oper === ''){
          this.num1 += this.digit[i]
          input.value = this.num1;
        } else if(this.num1 !== '' && this.num2 !== ''  && this.finish ){
          this.num2 = `${i}`;
          this.finish = false;
          input.value = this.num2;
        }
        else {
          this.num2 += i;
          input.value = this.num2;
        }
      }
    }
    // кнопка обнуления
    if(JSON.parse(event.target.dataset.val).json === 'AC'){
      this.num1 = '';
      this.num2 = '';
      this.oper = '';
      this.finish = false;
      input.value = 0;
      output.value = this.num1;
    }
    // кнопки действий
    for(let i = 0; i < this.action.length - 1; i++){
      if(JSON.parse(event.target.dataset.val).json === this.action[i]){
        this.oper = this.action[i]
        input.value = this.oper;
      }
    }
    // кнопка результата
    if(JSON.parse(event.target.dataset.val).json === '='){
      if(this.num2 === '') {
        this.num2 = this.num1;
      }
      switch(this.oper){
        case '+': 
          this.num1 = (+this.num1) + (+this.num2);
          break;
        case '-':
          this.num1 = this.num1 - this.num2;
          break;
        case '×':
          this.num1 = this.num1 * this.num2;
          break;
        case '÷':
          if(this.num2 === '0'){
            input.value = 'ERROR'
            this.num1 = '';
            this.num2 = '';
            this.oper = '';
            return;
          }
          this.num1 = this.num1 / this.num2;
          break;
        case '%':
          this.num1 = this.num1 * (this.num2 * 0.01)
          break;
      }
      this.finish = true;
      input.value = this.num1;
      output.value = this.num1;
    }
    if(JSON.parse(event.target.dataset.val).json === '+/-'){
      console.log(Math.sign(this.num1))
      if(Math.sign(this.num1) === 1){
        this.num1 = this.num1 * -1;
        input.value = +this.num1;
      } else if(Math.sign(this.num1) === -1){
        this.num1 = Math.abs(this.num1);
          input.value = this.num1;
      }
    }
  }

}
