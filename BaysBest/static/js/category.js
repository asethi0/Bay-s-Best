var app = function(){
	
	self.vue = {};

  Vue.config.silent = false; // show all warnings
	
	self.get_tags = function(){
		console.log("getting tags...");
		
		$.getJSON(get_tags_url,
			function(data){
				console.log(data.tags);
				self.vue.tags = data.tags;
			}
		);
	}
	
	self.select_subcat = function(){
		self.vue.in_subcat = true;
		self.get_title();
		console.log("entering " + self.vue.cur_subcat + "...");
		// enter subcategory
		// stop displaying nav photos
		// display back button
	}
	
	self.leave_subcat = function(){
		self.vue.in_subcat = false;
		self.vue.cur_subcat = '';
		self.title.title_subcat = '';
	}
	
	self.get_photos = function(){
		// retrieve all photos with subcategory
		// display quilted in chronological order (?)
	}
	
	self.vue = new Vue({
		el: "#category_div",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: { new_tag: '',
			cur_category: 'Nature',
			in_subcat: false,
			cur_subcat: '',
			tags: [],
		},
		methods: {
			get_tags: self.get_tags,
			select_subcat: self.select_subcat,
			leave_subcat: self.leave_subcat,
		}
	});
	
	self.get_title = function(){
		self.title.title_subcat = '~ ' + self.vue.cur_subcat;
	}
	
	self.title = new Vue({
		el: "#title_vue",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: {
			title_subcat: ''
		},
		methods: {
			
		}
	})
	
	self.get_tags();
	
	return self;
}

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});