use students;

db.students.insertMany(
    [
        {
            "name": "Bob", "class": 7, "lessons": ["english", "mathematics"], "avgScore": 3.5, "parents": [
                {"gender": "female", "name": "Ira"},
                {"gender": "male", "name": "Dima", "profession": "programmer"}
            ]
        },
        {
            "name": "Alice", "class": 7, "lessons": ["english", "mathematics", 'geology'], "avgScore": 5, "parents": [
                {"gender": "female", "name": "Katya", "profession": "doctor"},
                {"gender": "male", "name": "Andrii", "profession": "doctor"}
            ]
        },
        {"name": "Viktor", "class": 7, "lessons": ["german", "informatics"], "avgScore": 4.1},
        {"name": "Dima", "class": 7, "lessons": ["german", "mathematics", "physics"], "avgScore": 3.5},
        {
            "name": "Katerina", "class": 1, "lessons": ["basic"], "avgScore": 4, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {"name": "Ivanka", "class": 1, "lessons": ["basic"], "avgScore": 4.91},
        {"name": "Oleguk", "class": 1, "lessons": ["basic"], "avgScore": 4.2},
        {
            "name": "Igorko", "class": 1, "lessons": ["basic"], "avgScore": 2.61, "parents": [
                {"gender": "male", "name": "Vitalik", "profession": "builder"},
            ]
        },
        {
            "name": "Katya", "class": 1, "lessons": ["basic"], "avgScore": 3.92, "parents": [
                {"gender": "female", "name": "Solomiya", "profession": "architect"},
                {"gender": "male", "name": "Andriy", "profession": "driver"}
            ]
        },
        {
            "name": "Viktor", "class": 1, "lessons": ["basic"], "avgScore": 3.54, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Ivan", "class": 2, "lessons": ["basic"], "avgScore": 4.2, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Artem", "class": 2, "lessons": ["basic"], "avgScore": 3.9, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Kostya", "class": 2, "lessons": ["basic"], "avgScore": 4.24, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Inna", "class": 2, "lessons": ["basic"], "avgScore": 3.11, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Ivan", "class": 3, "lessons": ["basic"], "avgScore": 4.9, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Galina", "class": 3, "lessons": ["basic"], "avgScore": 3.8, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Dima", "class": 3, "lessons": ["basic"], "avgScore": 3.5, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Nastya", "class": 4, "lessons": ["informatics", "physics"], "avgScore": 4.1, "parents": [
                {"gender": "male", "name": "Viktor", "profession": "programmer"},
                {"gender": "female", "name": "Karina", "profession": "doctor"}
            ]
        },
        {
            "name": "Murka", "class": 4, "lessons": ["physics"], "avgScore": 2.7, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Vasyl", "class": 4, "lessons": ["english"], "avgScore": 4.93, "parents": [
                {"gender": "female", "name": "Solomiya", "profession": "architect"},
                {"gender": "male", "name": "Andriy", "profession": "driver"}
            ]
        },
        {
            "name": "Feliks", "class": 4, "lessons": ["physics"], "avgScore": 2.12, "parents": [
                {"gender": "female", "name": "Tanya", "profession": "designer"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        },
        {
            "name": "Katerina", "class": 4, "lessons": ["geology"], "avgScore": 4.51, "parents": [
                {"gender": "female", "name": "Ivan", "profession": "architect"},
            ]
        },
        {
            "name": "Konstantin",
            "class": 4,
            "lessons": ["english", "informatics", "geology"],
            "avgScore": 2.31,
            "parents": [
                {"gender": "female", "name": "Natylya", "profession": "HR"},
                {"gender": "male", "name": "Andriy", "profession": "economist"}
            ]
        },
        {
            "name": "Illya", "class": 4, "lessons": ["basic"], "avgScore": 2.78, "parents": [
                {"gender": "female", "name": "Irina", "profession": "waitress"},
                {"gender": "female", "name": "Olga", "profession": "chief financial officer"}
            ]
        },
        {
            "name": "Roman", "class": 4, "lessons": ["basic"], "avgScore": 5, "parents": [
                {"gender": "male", "name": "Igor", "profession": "programmer"},
                {"gender": "female", "name": "Oksana", "profession": "scientist"}
            ]
        },
        {
            "name": "Petro", "class": 4, "lessons": ["basic"], "avgScore": 4.8, "parents": [
                {"gender": "male", "name": "Ivan", "profession": "blogger"},
                {"gender": "male", "name": "Andriy", "profession": "blogger"}
            ]
        }
    ]
);


db.teacher.insertMany(
    [
        {"name": "Mariya Ivanivna", "class_curator": 7, "lesson": "english", "payment": 2000},
        {"name": "Sergey Viktorovich", "class_curator": 9, "lesson": "informatics", "payment": 3200},
        {"name": "Ivan Borisovich", "class_curator": 6, "lesson": "mathematics", "payment": 2500},
        {"name": "Tetyna Visilivna", "class_curator": 5, "lesson": "french", "payment": 2000},
        {"name": "Oksana Olegivna", "class_curator": 8, "lesson": "physics", "payment": 4000},
        {"name": "Ostap Miroslavovich", "class_curator": 4, "lesson": "geology", "payment": 2500},
        {"name": "Dmitro Igorovich", "class_curator": 3, "lesson": "basic", "payment": 2200},
        {"name": "Mikhailo Denisovick", "class_curator": 2, "lesson": "basic", "payment": 2300},
        {"name": "Diana Viktorivna", "class_curator": 1, "lesson": "basic", "payment": 2100}
    ]
);
