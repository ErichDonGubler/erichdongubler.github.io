
<?

  if (ISSet($_REQUEST["First_Name"]))

  {

    $FirstName = $_REQUEST["First_Name"];

  }

  else

  {

    Die( "Please enter a value in the name field..." );

  }



  $Handle = FOpen("names.txt", "a+") or

    Die( "Error opening file" );



  if (!FWrite($Handle, $FirstName . "\n"))

  {

    Die( "Error writing to file!" );

  }



  FClose($Handle) or

    Die( "Error closing file!" );



  print( "Name: " . $FirstName . " Saved to file..." );

?>