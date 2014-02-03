<?php
  
  for($i=1;$i<=75;$i++)
  {
    $im = imagecreatetruecolor(100, 100);
    $trans_colour = imagecolorallocatealpha($im, 255, 255, 255, 127);  
    imagefill($im, 1, 1, $trans_colour);  
    $file_name="{$i}.png";
    
    //字型顏色  
    $tt_black=imagecolorallocate($im,0,0,0); //字型顏色設定-黑
    
    ImageTTFText ($im,65, 0, -3, 82, $tt_black, "msjhbd.ttf", sprintf("%02d",$i) ) ;
    
    imagealphablending($im, false);
    imagesavealpha($im, true);   
    imagepng($im,$file_name);
    imagedestroy($im);         
  }