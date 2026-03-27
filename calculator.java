public class calculator {
    public static void main(String[] args) {
        int a = 3;
        int b = 4;
        char op = '+';

        int result = 0;

        switch(op){
            case '+': result = a + b; break;
            case '-': result = a - b; break;
            case '*': result = a * b; break;
            case '/': result = a / b; break;
            default: 
                System.out.println("Invalid operator");
                return;
        }

        System.out.println("Result = " + result);

        try {
            Thread.sleep(3600000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}
