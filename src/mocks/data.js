const mockedData = [
    {
        "id": 1,
        "first_name": "Marlo",
        "last_name": "Durram",
        "address": "1 Hoard Drive",
        "department": "Research and Development"
    },
    {
        "id": 2,
        "first_name": "Jeanine",
        "last_name": "Reiling",
        "address": "51 Dapin Terrace",
        "department": "Engineering"
    },
    {
        "id": 3,
        "first_name": "Fax",
        "last_name": "Sherebrooke",
        "address": "4 Village Green Way",
        "department": "Research and Development"
    },
    {
        "id": 4,
        "first_name": "Zane",
        "last_name": "Gummory",
        "address": "88 Nova Avenue",
        "department": "Training"
    },
    {
        "id": 5,
        "first_name": "Web",
        "last_name": "McConnell",
        "address": "6 Cherokee Center",
        "department": "Training"
    },
    {
        "id": 6,
        "first_name": "Muffin",
        "last_name": "Brimblecombe",
        "address": "9 Village Court",
        "department": "Accounting"
    },
    {
        "id": 7,
        "first_name": "Ring",
        "last_name": "Braffington",
        "address": "4 Hoffman Parkway",
        "department": "Research and Development"
    },
    {
        "id": 8,
        "first_name": "Constantina",
        "last_name": "Dollen",
        "address": "450 Schurz Plaza",
        "department": "Legal"
    },
    {
        "id": 9,
        "first_name": "Leodora",
        "last_name": "McOnie",
        "address": "66286 Holy Cross Terrace",
        "department": "Product Management"
    },
    {
        "id": 10,
        "first_name": "Teri",
        "last_name": "Weild",
        "address": "21412 Ludington Court",
        "department": "Marketing"
    },
    {
        "id": 11,
        "first_name": "Anett",
        "last_name": "Jura",
        "address": "75 Carberry Parkway",
        "department": "Sales"
    },
    {
        "id": 12,
        "first_name": "Kermy",
        "last_name": "Stuther",
        "address": "8 Carioca Point",
        "department": "Product Management"
    },
    {
        "id": 13,
        "first_name": "Lolita",
        "last_name": "Copnar",
        "address": "690 Clarendon Place",
        "department": "Services"
    },
    {
        "id": 14,
        "first_name": "Kiri",
        "last_name": "Mathet",
        "address": "80213 Manley Lane",
        "department": "Training"
    },
    {
        "id": 15,
        "first_name": "Heidi",
        "last_name": "Pechet",
        "address": "9 Transport Street",
        "department": "Human Resources"
    },
    {
        "id": 16,
        "first_name": "Eileen",
        "last_name": "Bunn",
        "address": "62971 Schmedeman Terrace",
        "department": "Business Development"
    },
    {
        "id": 17,
        "first_name": "Karlis",
        "last_name": "Tillerton",
        "address": "31 Pine View Circle",
        "department": "Services"
    },
    {
        "id": 18,
        "first_name": "Ulrikaumeko",
        "last_name": "Kuhnel",
        "address": "35660 Fairview Court",
        "department": "Research and Development"
    },
    {
        "id": 19,
        "first_name": "Brandy",
        "last_name": "Tapsfield",
        "address": "918 Lakewood Gardens Lane",
        "department": "Sales"
    },
    {
        "id": 20,
        "first_name": "Malachi",
        "last_name": "Thing",
        "address": "9 Trailsway Alley",
        "department": "Research and Development"
    },
    {
        "id": 21,
        "first_name": "Rina",
        "last_name": "Baskerfield",
        "address": "28 Maple Wood Road",
        "department": "Engineering"
    },
    {
        "id": 22,
        "first_name": "Tova",
        "last_name": "Castane",
        "address": "7 Schmedeman Center",
        "department": "Business Development"
    },
    {
        "id": 23,
        "first_name": "Nellie",
        "last_name": "Normington",
        "address": "046 Melody Trail",
        "department": "Training"
    },
    {
        "id": 24,
        "first_name": "Pippy",
        "last_name": "Gaukroger",
        "address": "2104 Monterey Crossing",
        "department": "Product Management"
    },
    {
        "id": 25,
        "first_name": "Dorelle",
        "last_name": "Labarre",
        "address": "4 Leroy Street",
        "department": "Sales"
    },
    {
        "id": 26,
        "first_name": "Starlin",
        "last_name": "Faill",
        "address": "94683 Algoma Hill",
        "department": "Sales"
    },
    {
        "id": 27,
        "first_name": "Mandy",
        "last_name": "Elwyn",
        "address": "3 Bowman Trail",
        "department": "Support"
    },
    {
        "id": 28,
        "first_name": "Lindi",
        "last_name": "Shory",
        "address": "9383 Lotheville Alley",
        "department": "Product Management"
    },
    {
        "id": 29,
        "first_name": "Heloise",
        "last_name": "Ludlom",
        "address": "2662 Corben Street",
        "department": "Business Development"
    },
    {
        "id": 30,
        "first_name": "Amandie",
        "last_name": "Gealle",
        "address": "8609 Evergreen Park",
        "department": "Training"
    },
    {
        "id": 31,
        "first_name": "Dorie",
        "last_name": "Labbey",
        "address": "3 Hayes Street",
        "department": "Sales"
    },
    {
        "id": 32,
        "first_name": "Norrie",
        "last_name": "Redparth",
        "address": "9 Aberg Drive",
        "department": "Business Development"
    },
    {
        "id": 33,
        "first_name": "Alfonse",
        "last_name": "Newgrosh",
        "address": "589 Quincy Hill",
        "department": "Marketing"
    },
    {
        "id": 34,
        "first_name": "Cathrine",
        "last_name": "Wigg",
        "address": "2 Memorial Center",
        "department": "Training"
    },
    {
        "id": 35,
        "first_name": "Melissa",
        "last_name": "Harback",
        "address": "2534 Forest Center",
        "department": "Product Management"
    },
    {
        "id": 36,
        "first_name": "Orton",
        "last_name": "Wimpress",
        "address": "31201 Michigan Pass",
        "department": "Product Management"
    },
    {
        "id": 37,
        "first_name": "Teddy",
        "last_name": "Yitzhak",
        "address": "8057 Burning Wood Court",
        "department": "Training"
    },
    {
        "id": 38,
        "first_name": "Joanna",
        "last_name": "Guidoni",
        "address": "3722 Moland Crossing",
        "department": "Training"
    },
    {
        "id": 39,
        "first_name": "Ermina",
        "last_name": "Gianninotti",
        "address": "0405 Northport Court",
        "department": "Support"
    },
    {
        "id": 40,
        "first_name": "Avram",
        "last_name": "Schwant",
        "address": "8795 Onsgard Park",
        "department": "Research and Development"
    },
    {
        "id": 41,
        "first_name": "Kellina",
        "last_name": "Fardoe",
        "address": "50 Lillian Street",
        "department": "Accounting"
    },
    {
        "id": 42,
        "first_name": "Elfreda",
        "last_name": "Mathiot",
        "address": "90 Springview Avenue",
        "department": "Legal"
    },
    {
        "id": 43,
        "first_name": "Sydney",
        "last_name": "Duinkerk",
        "address": "769 Continental Plaza",
        "department": "Sales"
    },
    {
        "id": 44,
        "first_name": "Lorie",
        "last_name": "Cossom",
        "address": "7163 North Parkway",
        "department": "Research and Development"
    },
    {
        "id": 45,
        "first_name": "Nissa",
        "last_name": "Bond",
        "address": "2737 Weeping Birch Street",
        "department": "Engineering"
    },
    {
        "id": 46,
        "first_name": "Penni",
        "last_name": "Pilch",
        "address": "5254 Monterey Hill",
        "department": "Product Management"
    },
    {
        "id": 47,
        "first_name": "Marlie",
        "last_name": "Orniz",
        "address": "4958 Coolidge Crossing",
        "department": "Services"
    },
    {
        "id": 48,
        "first_name": "Thomasa",
        "last_name": "Hugli",
        "address": "7 Meadow Valley Avenue",
        "department": "Engineering"
    },
    {
        "id": 49,
        "first_name": "Yance",
        "last_name": "Stutt",
        "address": "7777 Hoard Road",
        "department": "Product Management"
    },
    {
        "id": 50,
        "first_name": "Kermy",
        "last_name": "Huggon",
        "address": "05 Banding Parkway",
        "department": "Marketing"
    },
    {
        "id": 51,
        "first_name": "Aurlie",
        "last_name": "Dedenham",
        "address": "8 Stuart Court",
        "department": "Sales"
    },
    {
        "id": 52,
        "first_name": "Ginni",
        "last_name": "Beldan",
        "address": "4 Mariners Cove Place",
        "department": "Human Resources"
    },
    {
        "id": 53,
        "first_name": "Winfred",
        "last_name": "Rubega",
        "address": "4687 Mccormick Avenue",
        "department": "Engineering"
    },
    {
        "id": 54,
        "first_name": "Malinde",
        "last_name": "Splevins",
        "address": "0890 Holmberg Way",
        "department": "Engineering"
    },
    {
        "id": 55,
        "first_name": "Ree",
        "last_name": "Goodhay",
        "address": "8173 Everett Court",
        "department": "Support"
    },
    {
        "id": 56,
        "first_name": "Sarajane",
        "last_name": "Cheel",
        "address": "85229 Myrtle Terrace",
        "department": "Marketing"
    },
    {
        "id": 57,
        "first_name": "Em",
        "last_name": "McFall",
        "address": "2310 Transport Pass",
        "department": "Research and Development"
    },
    {
        "id": 58,
        "first_name": "Isabel",
        "last_name": "Gatenby",
        "address": "29 Towne Road",
        "department": "Support"
    },
    {
        "id": 59,
        "first_name": "Fanya",
        "last_name": "McGrouther",
        "address": "4 Bowman Junction",
        "department": "Business Development"
    },
    {
        "id": 60,
        "first_name": "Jehu",
        "last_name": "Steljes",
        "address": "83 Maple Court",
        "department": "Legal"
    },
    {
        "id": 61,
        "first_name": "Averil",
        "last_name": "Borrell",
        "address": "65 Doe Crossing Court",
        "department": "Training"
    },
    {
        "id": 62,
        "first_name": "Karel",
        "last_name": "Partlett",
        "address": "24 Shelley Park",
        "department": "Research and Development"
    },
    {
        "id": 63,
        "first_name": "Rance",
        "last_name": "Parlett",
        "address": "35507 Elmside Trail",
        "department": "Services"
    },
    {
        "id": 64,
        "first_name": "Griff",
        "last_name": "Hudson",
        "address": "054 Comanche Court",
        "department": "Engineering"
    },
    {
        "id": 65,
        "first_name": "Caressa",
        "last_name": "Hercock",
        "address": "62164 Dahle Road",
        "department": "Human Resources"
    },
    {
        "id": 66,
        "first_name": "Amara",
        "last_name": "McNirlin",
        "address": "0636 Ridgeway Avenue",
        "department": "Accounting"
    },
    {
        "id": 67,
        "first_name": "Kellyann",
        "last_name": "Waldie",
        "address": "82 Logan Crossing",
        "department": "Engineering"
    },
    {
        "id": 68,
        "first_name": "Claire",
        "last_name": "Pattison",
        "address": "94362 Haas Plaza",
        "department": "Marketing"
    },
    {
        "id": 69,
        "first_name": "Perl",
        "last_name": "Beceril",
        "address": "375 Quincy Drive",
        "department": "Human Resources"
    },
    {
        "id": 70,
        "first_name": "Ranna",
        "last_name": "Longstaffe",
        "address": "93 Acker Avenue",
        "department": "Engineering"
    },
    {
        "id": 71,
        "first_name": "Babs",
        "last_name": "Brookton",
        "address": "395 Bluestem Road",
        "department": "Marketing"
    },
    {
        "id": 72,
        "first_name": "Salli",
        "last_name": "Brunroth",
        "address": "71 Becker Place",
        "department": "Training"
    },
    {
        "id": 73,
        "first_name": "Loella",
        "last_name": "Brood",
        "address": "5139 Spohn Center",
        "department": "Training"
    },
    {
        "id": 74,
        "first_name": "Antonius",
        "last_name": "Kleinhandler",
        "address": "3483 Buell Lane",
        "department": "Product Management"
    },
    {
        "id": 75,
        "first_name": "Xenos",
        "last_name": "Wadge",
        "address": "0351 Fulton Street",
        "department": "Research and Development"
    },
    {
        "id": 76,
        "first_name": "Noam",
        "last_name": "Sonner",
        "address": "41703 Loeprich Way",
        "department": "Support"
    },
    {
        "id": 77,
        "first_name": "Andie",
        "last_name": "Colston",
        "address": "99 Warbler Place",
        "department": "Services"
    },
    {
        "id": 78,
        "first_name": "Carla",
        "last_name": "Blabey",
        "address": "38 Kropf Point",
        "department": "Marketing"
    },
    {
        "id": 79,
        "first_name": "Adorne",
        "last_name": "Armsden",
        "address": "4917 Hayes Pass",
        "department": "Support"
    },
    {
        "id": 80,
        "first_name": "Bradly",
        "last_name": "Kew",
        "address": "9 Ridge Oak Plaza",
        "department": "Training"
    },
    {
        "id": 81,
        "first_name": "Pippa",
        "last_name": "Prott",
        "address": "6700 Farragut Place",
        "department": "Human Resources"
    },
    {
        "id": 82,
        "first_name": "Si",
        "last_name": "Beckenham",
        "address": "78 Dwight Point",
        "department": "Training"
    },
    {
        "id": 83,
        "first_name": "Candide",
        "last_name": "Rymill",
        "address": "3 Manley Hill",
        "department": "Support"
    },
    {
        "id": 84,
        "first_name": "Iosep",
        "last_name": "Engeham",
        "address": "99 Burrows Plaza",
        "department": "Accounting"
    },
    {
        "id": 85,
        "first_name": "Jemie",
        "last_name": "Asgodby",
        "address": "32871 Sloan Circle",
        "department": "Training"
    },
    {
        "id": 86,
        "first_name": "Madelle",
        "last_name": "Klehyn",
        "address": "110 6th Junction",
        "department": "Engineering"
    },
    {
        "id": 87,
        "first_name": "Meade",
        "last_name": "Pitceathly",
        "address": "8 Ridgeview Street",
        "department": "Accounting"
    },
    {
        "id": 88,
        "first_name": "Cassondra",
        "last_name": "Schirok",
        "address": "039 Lighthouse Bay Point",
        "department": "Services"
    },
    {
        "id": 89,
        "first_name": "Stanly",
        "last_name": "Zucker",
        "address": "864 3rd Park",
        "department": "Business Development"
    },
    {
        "id": 90,
        "first_name": "Corrina",
        "last_name": "Minithorpe",
        "address": "86 Hanson Plaza",
        "department": "Accounting"
    },
    {
        "id": 91,
        "first_name": "Nataline",
        "last_name": "Torrent",
        "address": "972 Hayes Avenue",
        "department": "Legal"
    },
    {
        "id": 92,
        "first_name": "Lem",
        "last_name": "Keenor",
        "address": "2591 Ludington Circle",
        "department": "Business Development"
    },
    {
        "id": 93,
        "first_name": "Niki",
        "last_name": "Leivers",
        "address": "3 Kedzie Junction",
        "department": "Engineering"
    },
    {
        "id": 94,
        "first_name": "Glynn",
        "last_name": "Ingerith",
        "address": "21137 Continental Parkway",
        "department": "Product Management"
    },
    {
        "id": 95,
        "first_name": "Bobinette",
        "last_name": "Sholl",
        "address": "9 Hanson Alley",
        "department": "Sales"
    },
    {
        "id": 96,
        "first_name": "Devondra",
        "last_name": "Dranfield",
        "address": "8175 Stephen Lane",
        "department": "Marketing"
    },
    {
        "id": 97,
        "first_name": "Brigg",
        "last_name": "Goldstraw",
        "address": "82 Brown Hill",
        "department": "Support"
    },
    {
        "id": 98,
        "first_name": "Patsy",
        "last_name": "Martineau",
        "address": "2114 Corscot Place",
        "department": "Product Management"
    },
    {
        "id": 99,
        "first_name": "Quintilla",
        "last_name": "Kilday",
        "address": "62 Mallard Drive",
        "department": "Sales"
    },
    {
        "id": 100,
        "first_name": "Berti",
        "last_name": "Gay",
        "address": "2 Kropf Terrace",
        "department": "Product Management"
    }
]

export default mockedData