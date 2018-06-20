<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Menü Einstellungen</title>
    <script src="A3-LoadJSON.js"></script>
    <style>
        textarea {
            margin: 1rem;
            display: block;
            width: 80vw;
            height: 20vh;
        }
        input {
            margin: 1rem;
        }
    </style>
</head>
<body>

<h1>Menü-Content ändern</h1>

<form method="post">
    <fieldset>
        <legend>Wählen Sie die Kategorie aus und ändern Sie den Text:</legend>
        <select name="top_header">
            <option value="html">HTML</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
        </select>
        <select name="sub_header">
        </select>
        <textarea name="content" id="content"></textarea>
        <input type="submit" value="Submit" name="submitButton">
    </fieldset>
</form>

<a href="A3-Wireframe.html">Zurück zur Hauptseite</a>

<?php
$file = './data.json';
$contents = file_get_contents($file);
$json = json_decode($contents,true);

if(isset($_POST['submitButton'])) {
    if ( isset($_POST[ 'top_header' ]) && isset($_POST[ 'sub_header' ]) && isset($_POST[ 'content' ]) ){
        $top_header = $_POST[ 'top_header' ];
        $sub_header = $_POST[ 'sub_header' ];
        $content = $_POST[ 'content' ];
        $json[ $top_header ][ $sub_header ]['t'] = $content;

        if ( file_put_contents( $file, json_encode( $json, true )) ){
            echo "<script>alert('Content wurde erfolgreich bearbeitet!')</script>";
        }
        else{
            echo "<script>alert('ERROR')</script>";
        }
    }
}
?>

<script>
    let json = <?PHP echo json_encode( $json ) ?>;
    const top_header = document.querySelector('select[name="top_header"]');
    const sub_header = document.querySelector('select[name="sub_header"]');
    const content = document.querySelector("#content");

    top_header.addEventListener('change', e => {
        // entferne alle vorhandenen options im zweiten Selector
        while (sub_header.hasChildNodes()) {
            sub_header.removeChild(sub_header.lastChild);
        }
        // füge neue Options hinzu
        Object.keys( json[ e.target.value ] ).map( key => {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = key;
            sub_header.append( option );
        });
        showEntry();
    });



    sub_header.addEventListener('change', e => {
        showEntry();
    });

    console.log("WERT: " + top_header.value);

    setInitValues();

    function showEntry() {
        content.innerHTML = json[top_header.value][sub_header.value]["t"];
    }
    
    function setInitValues() {
        Object.keys(json[top_header.value]).map( key => {
            const option = document.createElement('option');
            option.value = key;
            option.innerText = key;
            sub_header.append( option );
        });
        showEntry();
    }
</script>

</body>
</html>