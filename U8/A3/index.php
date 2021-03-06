<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Title</title>
    <style>
        * {
            box-sizing: border-box;
        }
        body{
            font-family: sans-serif;
        }
        h1{
            text-align: center;
        }
        #menuChange{
            display: block;
            text-align: center;
            margin-bottom: 10px;
        }
        li a{
            text-decoration: none;
            color: black;
        }
        header{
            grid-area: header;
            display: grid;
            grid-auto-columns: max-content;
            /*grid-template-columns: auto auto auto auto;*/
        }
        header a{
            text-align: center;
            text-decoration: none;
            color: black;
            border: 1px solid black;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            /* um die Links vertikal zu zentrieren */
            display: grid;
            align-items: center;
        }
        header a.active{
            background-color: #e6e6e6;
        }
        header a:hover{
            background-color: #e6e6e6;
        }
        aside{
            grid-area: aside;
            border: 2px solid black;
            display: grid;
            grid-gap: 0px;
            grid-template-rows: 70px;
        }
        aside a{
            padding: 0px 10px;
            text-decoration: none;
            color: black;
            /* um die Links vertikal zu zentrieren */
            display: grid;
            align-items: center;
        }
        aside a.active{
            border-top: 2px solid black;
            border-bottom: 2px solid black;
            background-color: #e6e6e6;
        }
        aside a:hover{
            background-color: #e6e6e6;
        }
        main{
            padding: 20px;
            grid-area: main;
            border: 1px solid black;
        }
        footer {
            margin-top: 30px;
            padding-top: 20px;
            position: fixed;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: #0097fb;
            color: white;
            text-align: center;
        }
        footer a{
            padding-bottom: 15px;
            display: block;
            float: left;
            width: calc(100% / 3);
            text-decoration: none;
            color: white
        }
        footer a.active{
            border-bottom: 2px solid blue;
            color: blue
        }
        footer a:hover{
            border-bottom: 2px solid blue;
            color: blue
        }
        .grid-container{
            margin-left: 20px;
            margin-right: 40px;
            display: grid;
            grid-row-gap: 15px;
            grid-template-columns: 25% 75%;
            grid-template-rows: 40px 400px 200px;
            grid-template-areas:
                    "header header"
                    "aside main"
                    ". main";
        }

        @media screen and (max-width: 600px) {
            .grid-container{
                margin-left: 0px;
                margin-right: 0px;
                display: grid;
                grid-row-gap: 15px;
                grid-template-columns: 25% 75%;
                grid-template-rows: 40px 80px 600px;
                grid-template-areas:
                        "header header"
                        "aside aside"
                        "main main";
            }
            aside{
                grid-area: aside;
                border: 2px solid black;
                display: grid;
                grid-template-rows: 20px;
                grid-template-columns: auto auto;
            }
            aside a{
                padding: 0;
                text-align: center;
            }

        }

    </style>
</head>
<body>

<h1>Heading</h1>

<a id="menuChange" href="Einloggen.php">Menü ändern</a>

<div class="grid-container">

    <header>
    </header>
    <aside>
    </aside>
    <main>
    </main>
    <footer>
        <a href="#home">Footer</a>
        <a class="active" href="#contact">RECENT</a>
        <a href="#about">ALL FILES</a>
    </footer>
</div>

<?php
$file = './data.json';
$contents = file_get_contents($file);
$json = json_decode($contents,true);
?>

<script>
    const header = document.querySelector("header");
    const aside = document.querySelector("aside");
    const main = document.querySelector("main");

    let menues = <?PHP echo json_encode( $json ) ?>;

    for(let key in menues){
        let menuElement = document.createElement("a");
        menuElement.text = key;
        menuElement.href = "#";
        menuElement.addEventListener("click", function (){
            // nehme von allen Header Items active weg
            const list = header.children;
            for(let i = 0; i < list.length; i++){
                list[i].classList.remove("active");
            }
            // füge active ein
            this.classList.add("active");
            aside.innerHTML = ""; // lösche Inhalt des Side Menu
            // fülle Inhalt in Menu
            for(let key2 in menues[key]){
                let menuElement = document.createElement("a");
                menuElement.text = key2;
                menuElement.href = "#";
                menuElement.addEventListener("click", function (event) {
                    main.textContent = menues[key][key2]["t"];
                });
                aside.appendChild(menuElement);
            }});
        header.appendChild(menuElement);
    }

    // um das Spalten-Layout für die Anzahl der Spalten dynamisch anzupassen
    header.style.gridTemplateColumns = "auto ".repeat(Object.keys(menues).length);

</script>

</body>
</html>