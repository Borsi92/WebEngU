<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>

<h1>Registrierung</h1>

<form method="post">
    <fieldset>
        <legend>Erstellen Sie einen neuen Account</legend>
        Benutzername:<br>
        <input type="text" name="user"><br>
        Passwort:<br>
        <input type="password" name="pw"><br><br>
        <input type="submit" name="SubmitButton">
    </fieldset>
</form>

<?php
if(isset($_POST['SubmitButton'])){
    if(isset($_POST['user']) && !empty($_POST['user']) && isset($_POST['pw']) && !empty($_POST['pw'])){

        $SALT = "msd83z8gun238z";

        $user = hash("sha256", htmlspecialchars($_POST['user']) . $SALT);
        $pw = hash("sha256", htmlspecialchars($_POST['pw']) . $SALT);

        $file = './etc/passwords.csv';
        $newLine = $user . "," . $pw . "\n";

        $lines = file($file);

        foreach($lines as $lineNum => $line){
            $existingUser = explode(",", $line)[0];
            // echo $existingUser . "<br>";
            if($user === $existingUser){
                echo "<script>alert('Fehler: Benutzername existiert schon!')</script>";
                return;
            }
        }

        if ( file_put_contents( $file, $newLine, FILE_APPEND | LOCK_EX ) ){
            echo "<script>alert('Registrierung erfolgreich!')</script>";
        }

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