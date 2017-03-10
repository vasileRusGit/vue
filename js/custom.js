///////////////////////////////////////////////////////////////////////////////////////////////// COMPONENTS
// Vue.component('task-list',{
// 	template: `
// 	<div>
// 	<task v-for="task in tasks">{{task.descpription}}</task>
// 	</div>`,

// 	data() {
// 		return {
// 			tasks: [
// 				{descpription: 'Got othe store', completed: true},
// 				{descpription: 'Got othe store2', completed: false},
// 				{descpription: 'Got othe store3', completed: true},
// 				{descpription: 'Got othe store4', completed: false},
// 				{descpription: 'Got othe store5', completed: true},
// 				{descpription: 'Got othe store6', completed: false},
// 			]
// 		}
// 	}
// });

// Vue.component('task',{
// 	template: '<li><slot></slot></li>'
// });

////////////////////////////////////////////////////////////////////////////// MESSAGE COMPONENT
// Vue .component('message', {
// 	props: ['title', 'body'],

// 	data() {
// 		return {
// 			isVisible: true
// 		}
// 	},

// 	template: `
// 		<article class="message" v-show="isVisible">
// 			<div class="message-header">
// 			{{title}}
// 			<button class="close" @click="hideModal">x</button>
// 			</div>

// 			<div class="message-body">
// 			{{body}}
// 			</div>
// 		</article>
// 	`,

// 	methods: {
// 		hideModal(){
// 			this.isVisible = false;
// 		}
// 	}
// });

// //////////////////////////////////////////////////////////////////////////// MODAL COMPONENT
// Vue.component('modal', {
// 	template: `
// 		<div class="modal is-active">
// 			<div class="modal-background"></div>
// 			<div class="modal-content">
// 				<div class="box">
// 				<slot></slot>
// 				</div>
// 			</div>

// 			<button class="modal-close" @click="$emit('close')"></button>
// 		</div>
// 	`,
// });

////////////////////////////////////////////////////////////////////////////// TABS COMPONENTS
// Vue.component('tabs', {
// 	template: `
// 		<div>
// 			<div class="tabs">
// 				<ul>
// 					<li v-for="tab in tabs" :class="{'is-active': tab.isActive}"><a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a><li>
// 				</ul>
// 			</div>

// 			<div class="tabs-details">
// 				<slot></slot>
// 			</div>
// 		</div>
// 	`,

// 	data() {
// 		return { tabs: []};
// 	},

// 	created() {
// 		this.tabs = this.$children;
// 	},

// 	methods: {
// 		selectTab(selectedTab){
// 			this.tabs.forEach(tab => {
// 				tab.isActive = (tab.name == selectedTab.name);
// 			});
// 		}
// 	}
// });

// Vue.component('tab', {
// 	props: {
// 		name: {
// 			required: true
// 		},
// 		selected: {
// 			default: false
// 		}
// 	},

// 	template: `
// 		<div v-show="isActive"><slot></slot></div>
// 	`,

// 	data() {
// 		return {
// 			isActive: false
// 		}
// 	},

// 	mounted() {
// 		this.isActive = this.selected;
// 	},

// 	computed: {
// 		href() {
// 			return '#' + this.name.toLowerCase().replace(/ /g, '-');
// 		}
// 	}
// });


//////////////////////////////////////////////////////////////////// COMPONENT COMMUNICATION
// window.Event = new class{
// 	constructor() {
// 		this.vue = new Vue();
// 	}

// 	fire(event, data = null){
// 		this.vue.$emit(event, data);
// 	}

// 	listen(event, callback){
// 		this.vue.$on(event, callback)
// 	}
// }


// Vue.component('coupon', {
// 	template: `
// 		<input placeholder="enter coupon code" @blur="onCouponAplied">
// 	`,

// 	methods: {
// 		onCouponAplied(){
// 			Event.fire('applied');
// 		}
// 	}
// });


// //////////////////////////////////////////////////////////////////// NAMED SLOTS
// Vue.component('modal', {
// 	template: `
// 		<div class="modal is-active">
// 		  <div class="modal-background"></div>
// 		  <div class="modal-card">
// 		    <header class="modal-card-head">
// 		      <p class="modal-card-title"><slot name="header"></slot></p>
// 		      <button class="delete"></button>
// 		    </header>
// 		    <section class="modal-card-body">
// 		      <slot name="content"></slot>
// 		    </section>
// 		    <footer class="modal-card-foot">
// 		      <slot name="footer">
// 				<a class="button is-success">Okay</a>
// 		      </slot>
// 		    </footer>
// 		  </div>
// 		</div>
// 	`,
// });


// //////////////////////////////////////////////////////////////////// INLINE TEMPLATES
Vue.component('progress-view', {
	data() {
		return {
			completionRate: 20
		}
	}
});



var app = new Vue({
	el: '#root',
	//////////////////////////////////////////////////////////////////// LIST and evnet listeners
	// data: {
	// 	newName: '',
	// 	names: ['n1','n2','n3','n4']
	// },

	// methods: {
	// 	onClick(){
	// 		this.names.push(this.newName);
	// 		this.newName = '';
	// 	}
	// }


	//////////////////////////////////////////////////////////////////// ATTRIBUTE BINDING
	// data: {
	// 	isLoading:  false,
	// 	title: 'Now i use a bind title.',
	// 	className : 'color-red'
	// },
	// methods:{
	// 	toggleClass(){
	// 		this.isLoading = true;
	// 	}
	// }


	//////////////////////////////////////////////////////////////////// COMPUTED PROPERTIES
	// data:{
	// 	message: 'Hello World',
	// 	tasks: [
	// 		{descpription: 'Got othe store', completed: true},
	// 		{descpription: 'Got othe store2', completed: false},
	// 		{descpription: 'Got othe store3', completed: true},
	// 		{descpription: 'Got othe store4', completed: false},
	// 		{descpription: 'Got othe store5', completed: true},
	// 		{descpription: 'Got othe store6', completed: false},
	// 	]
	// },

	// methods: {
	// 	moveToOpositeList(){
	// 		// for(task in tasks){
	// 			// if(task.completed == false){
	// 				this.tasks.completed == true;
	// 			// }
	// 			// if(task.completed == true){
	// 			// 	task.completed == false;
	// 			// }
	// 		// }
	// 	}
	// },

	// computed: {
	// 	reverseMessage(){
	// 		return this.message.split('').reverse().join('');
	// 	},

	// 	incompleteTasks() {
	// 		return this.tasks.filter(task => !task.completed);
	// 	},

	// 	completeTasks() {
	// 		return this.tasks.filter(task => task.completed);
	// 	}
	// }



	//////////////////////////////////////////////////////////////////// COMPONENTS
	// data: {
	// 	showModal: false
	// },

	// methods: {
	// 	showModalOnClick(){
	// 		this.showModal = true;
	// 	},

	// 	hideModalOnClick() {
	// 		this.showModal = false;
	// 	}
	// }


	//////////////////////////////////////////////////////////////////// COMPONENT COMMUNICATION
	// data: {
	// 	couponApplied: false
	// },
	// methods: {
	// 	onCouponAplied(){
	// 		this.couponApplied = true;
	// 	}
	// },
	// created(){
	// 	Event.listen('applied', () => alert('handle'));
	// }



	//////////////////////////////////////////////////////////////////// NAMED SLOTS


});