<?php
// Allow requests from any origin
header("Access-Control-Allow-Origin: *");
// Allow the content type of the request to be from any domain
header("Access-Control-Allow-Headers: *");
// Check if the necessary POST variables are set
if (isset($_POST['amount'])) {
    $amount = $_POST['amount'];
    $merchant_id = "1227512";
    $order_id = "ItemNo12345";
    $currency = "LKR";
    $merchant_secret = 'MjUyMzM1MjYwNTMwODk3NzkxNDAzODMwMzg4NjUzMjkyODE2MTE2';
    
    // Generate the hash
    $hash = strtoupper(
        md5(
            $merchant_id . 
            $order_id . 
            number_format($amount, 2, '.', '') . 
            $currency .  
            strtoupper(md5($merchant_secret))
        )
    );
    
    // Return the hash
    echo $hash;
} else {
    echo "Error: Missing required parameters.";
}
?>
