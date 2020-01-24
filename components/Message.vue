<template>
    <div class="todos-container">
        <div class="todo-container">
        <div class="message-container">
            <div class="row">
                <div class="col-xs-12">
                    <div class="btn-group btn-group-vertical" data-toggle="buttons">
                        <label class="btn active">
                            <input type="checkbox" name='email1' checked>
                            <i class="fa fa-square-o fa-2x"></i>
                            <i class="fa fa-check-square-o fa-2x"></i> 
                            <span> {{this.message.text}}</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: {
                text: '英語'
            },
            checked1: false
        }
    },
    methods: {
        login() {
            window.alert('ログインしろ！')
        }
    },
}
</script>

<style scoped>
.time{
 font-weight: lighter;
}
.message {
    font-weight: bold;
    
}
.todos-container {
    padding: 5px;
}
label input[type="checkbox"] ~ i.fa.fa-square-o{
    color: #c8c8c8;    display: inline;
}
label input[type="checkbox"] ~ i.fa.fa-check-square-o{
    display: none;
}
label input[type="checkbox"]:checked ~ i.fa.fa-square-o{
    display: none;
}
label input[type="checkbox"]:checked ~ i.fa.fa-check-square-o{
    color: #7AA3CC;    display: inline;
}
label:hover input[type="checkbox"] ~ i.fa {
color: #7AA3CC;
}
div[data-toggle="buttons"] label.active{
    color: #7AA3CC;
}

div[data-toggle="buttons"] label {
display: inline-block;
padding: 6px 12px;
margin-bottom: 0;
font-size: 14px;
font-weight: normal;
line-height: 2em;
text-align: left;
white-space: nowrap;
vertical-align: top;
cursor: pointer;
background-color: none;
border: 0px solid 
#c8c8c8;
border-radius: 3px;
color: #c8c8c8;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none;
}

div[data-toggle="buttons"] label:hover {
color: #7AA3CC;
}

div[data-toggle="buttons"] label:active, div[data-toggle="buttons"] label.active {
-webkit-box-shadow: none;
box-shadow: none;
}


</style>>

