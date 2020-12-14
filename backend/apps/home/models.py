from django.db import models

from wagtail.core.models import Page, Orderable
from wagtail.admin.edit_handlers import FieldPanel, MultiFieldPanel, InlinePanel, PageChooserPanel

from modelcluster.fields import ParentalKey
from wagtail.images.edit_handlers import ImageChooserPanel


class HomePagebanner(Orderable):

	page = ParentalKey("home.HomePage", related_name="banner_images")
	banner_title = models.CharField(max_length=100, blank=False, null=True)
	banner_subtitle = models.CharField(max_length=240, blank=False, null=True)
	banner_image = models.ForeignKey("wagtailimages.Image", null=True, blank=False, on_delete=models.SET_NULL, related_name="+")
	banner_cta = models.ForeignKey("wagtailcore.Page", null=True, blank=True, on_delete=models.SET_NULL, related_name="+")

	panels = [
				FieldPanel("banner_title"),
				FieldPanel("banner_subtitle"),
				ImageChooserPanel("banner_image"),
				PageChooserPanel("banner_cta"),
    		]


class HomePage(Page):
	template = "home.html"
	#templates = 'home/home_page.html'
	max_count = 1

	content_panels = Page.content_panels + [MultiFieldPanel([InlinePanel("banner_images", max_num=5, min_num=1, label="Image")], heading="Banner Images",),]
	
	def get_sitemap_urls(self, obj):
		return [
            {
                'location': self.full_url,
                'lastmod': self.latest_revision_created_at,
                'changefreq': 'monthly',
                'priority': 1,
                
            }
        ]





