<html>
<body>
		<form method="post" runat="server">
		<p>
			Sign Guestbook <?echo date("m/d/Y G:i");?><br>
			<textarea id="stuff" rows="10" cols="120" name="formTReport" wrap="physical"></textarea><br /> 
			<?
			$Handle = FOpen("names.txt", "a+") or
				Die( "Error opening file" );
			if (!FWrite($Handle, "asdf" . "\n"))
			{
				Die( "Error writing to file!" );
			}
			FClose($Handle) or
				Die( "Error closing file!" );
			print( "Saved to file..." );
			?>
		</p>
		<input type="submit" value="Submit" runat="server" />
		<p id="p1" runat="server" />
		</form>
	</form>
</body>
</html>
