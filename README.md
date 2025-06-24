# 美少女ちゃん API

この API は、美少女ちゃんのアイコンを返す API です。

## デフォルト `/api/bsj/default`

デフォルトで設定されているアイコンが返されます。  
オプション：サイズ指定 `?size={number}`

<img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/default" width="180" height="180">

## イベント(指定月) `/api/bsj/{1-12}`

指定した月のイベントアイコンが返されます。  
オプション：サイズ指定 `?size={number}`

<div style="display:flex;" align="left">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/1" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/2" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/3" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/4" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/5" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/6" width="180" height="180">
</div>
<div style="display:flex;" align="left">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/7" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/8" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/9" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/10" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/11" width="180" height="180">
    <img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/12" width="180" height="180">
</div>

## イベント(今月) `/api/bsj/current`

今月のイベントアイコンが返されます。  
オプション：サイズ指定 `?size={number}`

<img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/current" width="180" height="180">

## ランダム `/api/bsj/random`

存在するイベントアイコンの中からランダムでアイコンが返されます。  
オプション：サイズ指定 `?size={number}`

<img alt="美少女ちゃん" src="https://bsj-api.vercel.app/api/bsj/random" width="180" height="180">
