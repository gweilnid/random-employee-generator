# Dokumentace Skriptu Pro Generování Zaměstnanců

Tento skript generuje seznam zaměstnanců s náhodnými vlastnostmi podle počtu a věkového rozmezí ze vstupu.

## Pseudokód 

### Vstupní Parametry
- `dtoIn`: Proměnná ze vstupu která obsahuje:
  - `count`: Počet zaměstnanců.
  - `age`: Minimální a maximální věk (`min`, `max`).

### Návratová Hodnota
- Pole, kde každý index je zaměstnanec.

### Hlavní Funkce `main`
```plaintext
Inicializce proměnných:
let count = dtoIn.count;
let minAge = dtoIn.age.min;
let maxAge = dtoIn.age.max;
let dtoOut = [];

Pokud (chtějí generovat 0 zaměstnanců) count == 0:
    Vrať prázdné pole

Pokud je záporný počet zaměstnanců count < 0:
    Vyhodí chybu "Zadejte kladné číslo."

Pokud (minimální věk je větší než maximílní nebo nezletilí věk) minAge < 18 || minAge > maxAge":
    Vyhodí chybu "Neplatný věkový intervál."

Pro každého (nového zaměstnance) index od 0 do dtoIn.count - 1:
    empGender = getGender()
    birthdate = getBirthday(dtoIn.age.min, dtoIn.age.max)
    Pokud empGender == "female":
        Vytvoř a přidej zaměstnance voláním pomocných funkcí (
            gender: empGender,
            birthdate: getBirthday(minAge, maxAge),
            name: getMaleName(),
            surname: getMaleSurname(),
            workload: getWorkload())
    Jinak:    
        Vytvoř a přidej zaměstnance voláním pomocných funkcí (
            gender: empGender,
            birthdate: getBirthday(minAge, maxAge),
            name: getMaleName(),
            surname: getMaleSurname(),
            workload: getWorkload())
Vrať (pole zaměstnancu) dtoOut
```
## Pomocné Funkce
```plaintext
getRandomInt(min, max)
Generuje náhodné celé číslo mezi min a max(včetně).

getGender()
Vrátí náhodně vybrané pohlaví ("female" nebo "male").

getBirthday(minYear, maxYear)
Generuje náhodné datum narození mezi roky minYear a maxYear.
Zkontroluje jestli není 29. Únor pro nepřestupný rok februaryCheck()
Zkontroluje jestli datum je v platném intervalu birthdayIntervalEdges()
Vrátí datum v ISO formátu

getFemaleName()
Vrátí náhodné ženské křestní jméno.

getMaleName()
Vrátí náhodné mužské křestní jméno.

getFemaleSurname()
Vrátí náhodné ženské příjmení.

getMaleSurname()
Vrátí náhodné mužské příjmení.

getWorkload()
Vrátí náhodně vybranou pracovní zátěž.

februaryCheck(day, month, year)
Kontroluje a upravuje datum pro 29. únor v nepřestupných letech.

isLeapYear(year)
Je zadaný rok přestupný?

birthdayIntervalEdges(minYear, maxYear, currentDate, birthday)
Upravuje datum narození aby byl v platném intervalu.
```
