---
name: jekyll-and-sublime

title: Jekyll and Sublime
categories: [ programming, jekyll ]

published: false
---

I haven't written about this before, but 



I just discovered this sweet package for Jekyll development! With some configuration, I've been able to get some nifty features integrated into Sublime Text 3:

* 

Here's the ```.sublime-project``` I'm using at the time of writing:

{% highlight json linenos %}
{
	"folders":
	[
		{
			"follow_symlinks": true,
			"path": ".."
		}
	],
	"build_systems":
	[
		{
	        "name": "Run Jekyll",
	        "working_dir": "$project_path/..",
	        "shell_cmd": "gnome-terminal -e 'bash --login -c \"jekyll serve\"'",
	        "windows":
	        {
	            "shell_cmd": "start jekyll serve"
	        }
		}
	],
	"syntax_override":
	{
        "\\.html$": [ "Jekyll", "Syntaxes", "HTML (Jekyll)" ]
        ,"\\.md$": [ "Jekyll", "Syntaxes", "Markdown (Jekyll)" ]
  	},
	"settings":
	{
	  "Jekyll":
	  {
	      "posts_path": "../_posts",
	      "drafts_path": "../_drafts",
	  }
	}
}
{% endhighlight %}

The Jekyll plugin for Sublime can be found [here](https://packagecontrol.io/packages/Jekyll).

Some of you may not recognize the 