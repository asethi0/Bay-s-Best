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
	
	self.vue = new Vue({
		el: "#category_div",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: { new_tag: '',
			cur_category: 'Nature',
			tags: [],
		},
		methods: {
			get_tags: self.get_tags,
		}
	});
	
	self.get_tags();
	
	return self;
}

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});