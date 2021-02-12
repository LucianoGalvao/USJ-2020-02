package interfacegrafica;

import java.net.URL;
import java.util.ResourceBundle;

import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.TextField;
import javafx.scene.control.Label;
import javafx.scene.control.Button;
import javafx.scene.control.RadioButton;
import javafx.scene.control.ComboBox;

public class CervejaController implements Initializable {
	@FXML
	private TextField txtNome;
	@FXML
	private TextField txtQntGarrafas;
	@FXML
	private Label lblNotaFiscal;
	@FXML
	private Label lblSubTotal;
	@FXML
	private Label lblDescontoGarrafasValor;
	@FXML
	private Label lblTotal;
	@FXML
	private Button btnCalcular;
	@FXML
	private Button btnLimpar;
	@FXML
	private RadioButton rdoLager;
	@FXML
	private RadioButton rdoPilsen;
	@FXML
	private ComboBox<String> cboLocalizacao;

	public void onBtnCalcularClick() {
		int qntGarrafas;
		double precoGarrafas = 0;
		double impostos = 0;
		double descontoGarrafasValor = 0;
		double subTotal;
		double descontoGarrafas = 0;
		double total;

		String nome;
		String subTotalFormatado;
		String descontoGarrafasValorFormatado;
		String totalFormatado;

		nome = txtNome.getText();
		nome = nome.substring(0, 1).toUpperCase() + nome.substring(1).toLowerCase();
		lblNotaFiscal.setText("Nota fiscal de " + nome + ":");

		qntGarrafas = Integer.parseInt(txtQntGarrafas.getText());

		if (rdoLager.isSelected()) {
			precoGarrafas = 2.40;
		} else if (rdoPilsen.isSelected()) {
			precoGarrafas = 2.10;
		}

		if (cboLocalizacao.getValue().equals("Santa Catarina")) {
			impostos = 0.6;
		} else if (cboLocalizacao.getValue().equals("Outros estados do Sul")) {
			impostos = 0.65;
		} else if (cboLocalizacao.getValue().equals("Sudeste")) {
			impostos = 0.68;
		} else if (cboLocalizacao.getValue().equals("Nordeste")) {
			impostos = 0.70;
		} else if (cboLocalizacao.getValue().equals("Centro-Oeste")) {
			impostos = 0.75;
		} else if (cboLocalizacao.getValue().equals("Norte")) {
			impostos = 0.85;
		}

		subTotal = qntGarrafas * precoGarrafas + (qntGarrafas * precoGarrafas * impostos);

		if (qntGarrafas > 1000) {
			descontoGarrafasValor = subTotal*0.1;
		} else if (qntGarrafas <= 1000) {
			descontoGarrafasValor = subTotal*0.02;
		}

		total = subTotal - descontoGarrafasValor;

		subTotalFormatado = String.format("%.2f", subTotal);
		descontoGarrafasValorFormatado = String.format("%.2f", descontoGarrafasValor);
		totalFormatado = String.format("%.2f", total);

		lblSubTotal.setText("R$ " + subTotalFormatado);
		lblDescontoGarrafasValor.setText("R$ " + descontoGarrafasValorFormatado);
		lblTotal.setText("R$ " + totalFormatado);

	}

	public void onBtnLimparClick() {
		txtNome.setText("");
		txtQntGarrafas.setText("");
		lblNotaFiscal.setText("Nota fiscal");
		lblSubTotal.setText("");
		lblDescontoGarrafasValor.setText("");
		lblTotal.setText("");
		cboLocalizacao.valueProperty().set(null);
		rdoLager.setSelected(false);
		rdoPilsen.setSelected(false);
		btnLimpar.setDisable(true);
		btnCalcular.setDisable(true);
	}

	public void onKeyReleased() {
		boolean calcular;
		boolean limpar;

		calcular = (txtQntGarrafas.getText().isEmpty());
		btnCalcular.setDisable(calcular);

		limpar = (txtQntGarrafas.getText().isEmpty() & txtNome.getText().isEmpty());
		btnLimpar.setDisable(limpar);
	}

	@Override
	public void initialize(URL arg0, ResourceBundle arg1) {
		cboLocalizacao.getItems().addAll("Santa Catarina", "Outros estados do Sul", "Sudeste", "Nordeste",
				"Centro-Oeste", "Norte");

	}

}
