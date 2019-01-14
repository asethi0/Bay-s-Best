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
	
	self.add_tag = function(){
		if (self.vue.subcat_cover == ''){
			alert("Please select a cover image");
		}else{
			console.log(self.vue.new_tag);
			$.post(add_tag_url,
				{
					name: self.vue.new_tag,
					category: self.vue.cur_category,
					cover: self.vue.subcat_cover,
				},
				function(data){
					console.log("Tag created"); 
				}
			)
			self.get_tags();
		}
	}
	
	self.remove_tag = function(name){
		if (confirm("Really delete '" + name + "'?")){
			$.post(remove_tag_url,
				{
					name: name
				},
				function(data){
					console.log("Tag Removed");
				}
			)
		}
	}
	
	self.vue = new Vue({
		el: "#upload_form",
		delimiters: ['${', '}'],
		unsafeDelimiters: ['!{', '}'],
		data: { new_tag: '',
			cur_category: 'Nature',
			tags: [],
			subcat_cover: ''
		},
		methods: {
			remove_tags: self.remove_tag,
			get_tags: self.get_tags,
			add_tag: self.add_tag,
		}
	});
	
	self.get_tags();
	
	return self;
}

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){APP = app();});