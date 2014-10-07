<?php
try {
    $html = $this->curl('http://testing.moacreative.com/job_interview/php/index.html');
    $dom = new DOMDocument();
    $dom->loadHTML($html);
    $result = $this->element_to_obj($dom->documentElement);
    $out = array_values($result);
    $arr = array('html' => $out);
    $json = json_encode($arr);
    $handle = fopen('/var/log/yii/films.json', 'a') or die('Cannot open file:  ' . '/var/log/yii/films.json');
    $output = $json;
    fwrite($handle, $output);
    fclose($handle);
} catch (Exception $exc) {
    echo $exc->getTraceAsString();
}
    

function curl($url){
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
    return curl_exec($ch);
    curl_close ($ch);
}

function element_to_obj($element) {

    foreach ($element->attributes as $attribute) {
        $obj['attributes'][$attribute->name] = $attribute->value;
    }    

    foreach ($element->childNodes as $subElement) {
        if ($subElement->nodeType == XML_TEXT_NODE) {
            $obj["value"] = $subElement->wholeText;
        } else if ($subElement->tagName == 'style') {
            $obj["style"] = $subElement->value;
        }
        else {
            if ($subElement->hasAttribute('id')) {
                $obj["children"][$subElement->tagName.'#'.$subElement->getAttribute('id')] = $this->element_to_obj($subElement);
            } else {
                $obj["children"][$subElement->tagName] = $this->element_to_obj($subElement);
            }
        }
    }
    return $obj;
}
?>
