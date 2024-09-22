# Importando a biblioteca string para facilitar a obtenção das letras do alfabeto
import string

# Passo 1: Coloque todas as letras do alfabeto brasileiro em ordem crescente
alfabeto = list(string.ascii_uppercase)  # Obtém as letras de A a Z em maiúsculas

# Passo 2: Atribua a cada letra uma numeração crescente que deve iniciar em 1
alfabeto_numerado = {letra: index + 1 for index, letra in enumerate(alfabeto)}

# Passo 3: Campo para colocar uma palavra com sequência aleatória das letras do alfabeto
palavra1 = input("Digite a primeira palavra (Exemplo: HIKU): ").upper()

# Passo 4: Campo para colocar outra palavra com sequência aleatória das letras do alfabeto
palavra2 = input("Digite a segunda palavra: ").upper()

# Passo 5: Verificar o padrão entre as entradas e Passo 6: Retornar a numeração de cada letra
def verificar_padrao(palavra):
    return [alfabeto_numerado[letra] for letra in palavra]

# Exibindo a numeração de cada letra para as palavras inseridas
numeros_palavra1 = verificar_padrao(palavra1)
numeros_palavra2 = verificar_padrao(palavra2)

print(f"Numeração das letras na palavra '{palavra1}': {numeros_palavra1}")
print(f"Numeração das letras na palavra '{palavra2}': {numeros_palavra2}")

# Comparando padrões das duas palavras
if numeros_palavra1 == numeros_palavra2:
    print("As palavras seguem o mesmo padrão de numeração.")
else:
    print("As palavras têm padrões de numeração diferentes.")