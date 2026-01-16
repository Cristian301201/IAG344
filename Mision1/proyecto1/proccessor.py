import re
from openpyxl import load_workbook
# ===============================================
# Funcion clear_id
# Funcion para eliminar numeros y simbolos
# cc75.888.56 = "7588856"
# ===============================================

def clear_id ( value ):
    # Elimina caracteres no numericos
    if value is None:
        return "Se comio un payaso rey"
    return re.sub ( r"\D" , "" , str (value) ) #str() tranforma a string

# ================================================
# Funcion merge_name
# Une nombre y apellido en un solo campo
# ================================================

def merge_name (name, lastname) :
    if name is None:
        name = ""
    if lastname is None:
        lastname = ""
    return f"{name} {lastname}".strip() #Strip quita espacios 

# ================================================
# Funcion procces_excel
# ================================================

def process_excel (path) :
    # Acceso a la hoja llamada "datos"
    wb = load_workbook(path)
    ws = wb ["Datos"]
    # Recorrer todas las filas deade la numero 2
    for row in range (2 , ws.max_row + 1) :
        # Columna D: Identificador limpio
        ws [ f"D{row}" ] = clear_id ( ws [ f"A{row}"].value )
        # Colymna  E:  omnre completo
        ws [ f"E{row}" ] = merge_name ( 
        ws [ f"B{row}"].value , 
        ws [ f"C{row}"].value
        )