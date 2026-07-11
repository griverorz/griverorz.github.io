# Prominent pull-quote with an optional source link.
#
# Usage (supports multiple paragraphs in the body):
#
#   {% pullquote source="Author Name, Publication" url="https://example.com" %}
#   First paragraph of the quote.
#
#   Second paragraph of the quote.
#   {% endpullquote %}
#
# - The block body is the quote (rendered as Markdown, so paragraphs, emphasis,
#   and inline links all work).
# - `url`    : optional link; renders the source as a "label ->" link
#              (label defaults to "Source" when `source` is omitted).
# - `source` : optional label; if given without `url`, renders as plain text.

module Jekyll
  module Tags
    class PullquoteTag < Liquid::Block
      def initialize(tag_name, markup, tokens)
        super
        @attrs = {}
        markup.scan(/(\w+)\s*=\s*"([^"]*)"/) { |key, val| @attrs[key] = val }
      end

      def render(context)
        site = context.registers[:site]
        converter = site.find_converter_instance(::Jekyll::Converters::Markdown)
        quote = converter.convert(super(context))

        source = @attrs["source"]
        url = @attrs["url"]

        out = +%(<blockquote class="pullquote">#{quote}</blockquote>)
        if url && !url.empty?
          label = source && !source.empty? ? source : "Source"
          out << %(<p class="pullquote-source"><a href="#{url}" target="_blank" rel="noopener">#{label} &rarr;</a></p>)
        elsif source && !source.empty?
          out << %(<p class="pullquote-source">#{source}</p>)
        end
        out
      end
    end
  end
end

Liquid::Template.register_tag("pullquote", Jekyll::Tags::PullquoteTag)
