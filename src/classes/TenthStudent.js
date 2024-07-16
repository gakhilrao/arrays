class TenthStudent{

    static passMarks=35;

        static aboutTenth = () =>{
            console.log("Tenth exams are the first public exams which a student attempts in  his life");
        }

        constructor(){
            console.log("Inside TenthStudent constructor");
            this.engMarks=0;
            this.telMarks=0;
            this.hindhiMarks=0;
            this.engMarks=0;
            this.mathMarks=0;
            this.sciMarks=0;
            this.socMarks=0;
        }

        claculateResult = () =>{

            if(
                this.engMarks >= TenthStudent.passMarks&&
               this.telMarks >= TenthStudent.passMarks&&
               this.hindhiMarks >= TenthStudent.passMarks&&
               this.mathMarks >= TenthStudent.passMarks&&
               this.sciMarks >= TenthStudent.passMarks&&
               this.socMarks >= TenthStudent.passMarks
             ) {
                console.log('Student passed in Tenth');

            }else{
                console.log('Student failed in Tenth');

            }
        }
}

export default TenthStudent;