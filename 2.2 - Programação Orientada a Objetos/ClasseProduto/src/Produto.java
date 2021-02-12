
public class Produto {

		int codigo;
		int estoque;
		double preco;
		
		public void imprime() {
			System.out.println("Produto com código: " + codigo);
			System.out.println("Produto com preço: R$ " + preco);
			System.out.println("Produto com estoque: " + estoque);
		}
		
		public void reajuste(double valor) {
			preco = preco + valor;
		}
		
		public void compra (int quantidade) {
			estoque = estoque + quantidade;
		}
		public void venda (int quantidade) {
			estoque = estoque - quantidade;
		}
	}
												