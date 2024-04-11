document.addEventListener('DOMContentLoaded',function(){

    //DOMの取得
    var itemPrice = document.querySelector('#itemPrice p');
    var itemPhoto = document.querySelector('#itemPhoto img');
    var color = document.getElementById('color');
    var quantity = document.getElementById('quantity');
    var size = document.getElementsByName('size');
    var options = document.getElementsByName('options');
    var messeage = document.getElementById('messeage');
    var point = document.getElementById('point');
    var btn = document.getElementById('btn');

    //初期値
    var totalPrice = 1000;
    var optionValue = "";
    var deliveryDate = 3;

    //機能１　色変更
    color.addEventListener('change', function(){
        switch(color.value){
            case '白': itemPhoto.src = "white.png"; break;
            case '赤': itemPhoto.src = "red.png"; break;
            case '黒': itemPhoto.src = "black.png";break;
        }
    });
  
    //数量変更
    quantity.addEventListener('change', function(){
        if(quantity.value === '10'){
            itemPrice.innerHTML = '価格：800円 / 枚'
            totalPrice = 800*10;
        }else{
            itemPrice.innerHTML =  '価格：1,000円 / 枚'
            totalPrice = 1000 * parseInt(quantity.value);
        }
    });

    
    //追加課題　メッセージ機能
    options[2].addEventListener('change',function(){
        if(options[2].checked){
            messeage.parentElement.hidden = false;
        }else{
            messeage.parentElement.hidden = true;
        }
    });


    //購入ボタンの処理
    btn.addEventListener('click',function(){

        //ポイントの確認
        if(point.value == ""){
            alert('ポイントを入力してください');
            return;
        }else if(point.value>totalPrice){
            alert('購入額以上のポイントは使えません');
            return;
        }

        //サイズの確認
        for(var i=0; i<size.length; i++){
            if(size[i].checked){
                sizeText=size[i].value;
            }
        }

        //オプションの確認
        if(options[0].checked){
            optionValue += options[0].value + " ";
            deliveryDate = 1; //追加課題　お急ぎ便
        }else{
            deliveryDate = 3; 
        }
        if(options[1].checked){
            optionValue += options[1].value + " ";
            totalPrice += 200; //追加課題　プレゼント包装
        }
        if(options[2].checked){
            optionValue += options[1].value;
        }

        //機能２　確認メッセージの表示
        confirm(
            'お買い上げの商品は以下の通りでよろしいですか？\n'
            +'色：' + color.value + '\n'
            +'枚数：' + quantity.value +'枚\n'
            +'サイズ：' + sizeText +'\n'
            +'オプション：' + optionValue + '\n'
            +'価格 :' + (totalPrice - parseInt(point.value)) + '円\n'
        );

        optionValue="";
    });

});