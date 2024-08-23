public class Encriptador {

    public static String encriptar(String texto) {
        String textoEncriptado = texto;
        textoEncriptado = textoEncriptado.replace("a", "ai");
        textoEncriptado = textoEncriptado.replace("e", "enter");
        textoEncriptado = textoEncriptado.replace("i", "imes");
        textoEncriptado = textoEncriptado.replace("o", "ober");
        textoEncriptado = textoEncriptado.replace("u", "ufat");
        return textoEncriptado;
    }

    public static void main(String[] args) {
        String textoOriginal = "hola";
        String textoEncriptado = encriptar(textoOriginal);
        System.out.println("Texto original: " + textoOriginal);
        System.out.println("Texto encriptado: " + textoEncriptado);
    }

    public static String desencriptar(String texto) {
        String textoDesencriptado = texto;
        textoDesencriptado = textoDesencriptado.replace("ai", "a");
        textoDesencriptado = textoDesencriptado.replace("enter", "e");
        textoDesencriptado = textoDesencriptado.replace("imes", "i");
        textoDesencriptado = textoDesencriptado.replace("ober", "o");
        textoDesencriptado = textoDesencriptado.replace("ufat", "u");
        return textoDesencriptado;
    }
}
