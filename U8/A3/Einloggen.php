<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<style>
    body{
        font-family: sans-serif;
    }
</style>
<body>

<h1>Einloggen</h1>

<p>Falls Sie noch keinen Account haben, registrieren Sie sich <a href="Registrierung.php">hier</a></p>

<form method="post">
    <fieldset>
        <legend>Loggen Sie sich ein:</legend>
        Benutzername:<br>
        <input type="text" name="user"><br>
        Passwort:<br>
        <input type="password" name="pw"><br><br>
        <input type="submit" name="SubmitButton">
    </fieldset>
</form>

<a href="index.php">Zurück zur Hauptseite</a>

<?php
if(isset($_POST['SubmitButton'])){
    if(isset($_POST['user']) && !empty($_POST['user']) && isset($_POST['pw']) && !empty($_POST['pw'])){

        $SALT = "msd83z8gun238z";

        $user = hash("sha256", htmlspecialchars($_POST['user']) . $SALT);
        $pw = hash("sha256", htmlspecialchars($_POST['pw']) . $SALT) . "\n";

        $file = './etc/passwords.csv';

        $lines = file($file);

        foreach($lines as $lineNum => $line){
            list($existingUser, $existingPw) = explode(",", $line);
            // echo $existingUser . " " . $existingPw . "<br>";
            if($user == $existingUser && $pw == $existingPw){
                echo "<script>alert('Erfolgreich eingeloggt!')</script>";
                header("Location: ./A3-MenuEinstellung.php");                
                return;
            }
        }

        echo "<script>alert('Fehler: Falsche Daten eingegeben!')</script>";

        // echo "<br>Eingegeben: <br>";
        // echo "USER: " . $user . "<br>";
        // echo "PW: " . $pw . "<br>";
    }
    else{
        echo "<script>alert('Fehler: Keine Daten eingegeben!')</script>";
    }
}
?>

</body>
</html>