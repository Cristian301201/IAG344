# Librerias

import re

""" (Tres comillas para comentar varias lineas, # para comentar una sola linea)
Expresiones reguares en Python
Problemas reales
"""
# Codigo

print ( "Libreria cargada correctamente" )

#Ejemplo 1
texto = "Mi numero es 12345" #Decalracion de variables, no es necario declarar el tipo de variable string o int
resultado = re.search(r"\d+",texto) #Busca con el comando  en este caso solo los digitos y los almacena
print(resultado.group()) #Imprime el conjunto de todos los caracteres encontrados y almacenados
print (f"{texto} Resultado {resultado.group()}")
texto = "Mi numero es 12345-985"
resultado = re.search(r"\d+",texto)
print (f"{texto} Resultado {resultado.group()}") #Con la f y {} se puede remplazar la concatenzacion  regular para juntar texto y variables