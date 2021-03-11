<template>
<div>
	<sub-navbar :tabs="tabs" :title="title" ></sub-navbar>
	<div class="main">
		<div class="boards-container">
			
			<div class="boards-row" v-for="int of 3" :key="int.id">
				<div v-for="cot of 3" :key="cot.id" class="boards-selection">
					<div class="board-title">Title goes here</div>
					<div class="board-options">
						<div v-for="opt of 3" :key="opt.id">
							Option
						</div>
					</div>
					<div class="board-thumbnail">
							Board thumbnail goes here
					</div>
				</div>
			</div>

		</div>






	</div>

</div>

</template>


<style>

.board-thumbnail{
display:flex;
flex-flow:column;
align-items: center;
height:100%;
width:100%;
}
.board-options > div{
	height:100%;
	display:flex;
	flex-grow: 1;
	background-color: orange;
	color:white;
	flex-flow:column;
}
.board-options{
	height:12%;
	width:100%;
	background-color:rgb(77, 248, 154);
	display:flex;
	flex-flow: row;
}
.board-title{
	height:25%;
	width:100%;
	background-color:purple;
	color:white;
}
.boards-selection{
	display:flex;
	height: 100%;
	flex-grow:1;
	border:solid 0px red;
	margin:0px 3vw 0px 3vw;
	background-color: rgb(201, 201, 201);
	flex-flow:column;
}
.boards-row{
	width:100%;
	border:solid 0px blue;
	background-color: rgb(238, 238, 238);
	height:20vh;
	margin-bottom:50px;
	display:flex;
	flex-flow:row;
	padding:0px 3vw 0px 3vw;
}
.boards-container{
	height:100%;
	width:100%;
	border: solid 0px green;
}
.main{
width:100%;
border:solid 0px red;
padding:50px 15vw 0px 15vw;
}

</style>







<script>
import subNavbar from '../../components/boards/Sub-navbar.vue';

export default {
data(){
	return{
		tabs:'',
		title:'My Boards'
    
	}

},
components:{
	subNavbar
}

}
</script>
