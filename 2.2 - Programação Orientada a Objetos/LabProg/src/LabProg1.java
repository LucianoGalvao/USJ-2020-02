//Importação do JOptionPane
import javax.swing.JOptionPane;

public class LabProg1 {

    // Função para validar um triângulo
	public static boolean validaTriangulo (double l1,  double l2,  double l3)
	{
		boolean triangulo;
		if ( (l1>l2+l3) || (l2>l1+l3) || (l3>l1+l2))
			triangulo = false;
		else
			triangulo = true;
		return triangulo;
	}
    
    //Após triangulo validado, verificar o tipo de triângulo
	public static String tipoDeTriangulo (double l1, double l2, double l3)
	{
		String tipo;
		if ( (l1==l2) && (l2==l3) )
			tipo="equilatero";
		else 
			if ( (l1==l2) || (l2==l3) || (l1==l3))
				tipo="isosceles";
			else
				tipo="escaleno";
		return tipo;
    }
    
    //Início do programa
	public static void main(String[] args) {
	
	double lado1, lado2, lado3;
	int contador;
    boolean triang;
    String tipoTriangulo;
    

    //Estrutura de repetição para preenchimento dos 5 conjuntos
    for (int cont=0; cont<5; cont++) {
    	contador = cont + 1;
    	lado1 = Double.parseDouble(JOptionPane.showInputDialog("Digite o lado 1 do " + contador + "º triângulo: "));
    	lado2 = Double.parseDouble(JOptionPane.showInputDialog("Digite o lado 2 do " + contador + "º triângulo: "));
    	lado3 = Double.parseDouble(JOptionPane.showInputDialog("Digite o lado 3 do " + contador + "º triângulo: "));

    	triang = validaTriangulo (lado1, lado2, lado3);
    	  		
    	if (triang = true) {
    		System.out.println ("É um triângulo!");
    		tipoTriangulo = tipoDeTriangulo (lado1, lado2, lado3);
        	System.out.println ("O triângulo é do tipo: " + tipoTriangulo + ".");
    	}
    	else
    		System.out.println ("Lamento, mas isso não é um triângulo.");
    	}
    
    System.out.println("-- Fim do Programa --");
	}
}