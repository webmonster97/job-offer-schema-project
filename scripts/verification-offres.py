# pip install jsonschema
import json
import jsonschema
from jsonschema import validate

# Charger le schéma JSON depuis le fichier schema.json
with open('/schema/jobs-1.0.0.json', 'r', encoding='utf-8') as schema_file:
    schema = json.load(schema_file)

# Charger les offres d'emploi depuis le fichier offres.json
with open('../examples/jobs-examples-1.0.0.json', 'r', encoding='utf-8') as offres_file:
    offres = json.load(offres_file)

# Fonction pour valider une seule offre d'emploi
def valider_offre(offre, schema):
    try:
        validate(instance=offre, schema=schema)
        print(f"L'offre d'emploi {offre.get('identifier', {}).get('value', 'N/A')} est valide.")
    except jsonschema.exceptions.ValidationError as err:
        print(f"Erreur de validation pour l'offre {offre.get('identifier', {}).get('value', 'N/A')}: {err.message}")

# Valider chaque offre d'emploi dans le fichier offres.json
for offre in offres:
    valider_offre(offre, schema)
