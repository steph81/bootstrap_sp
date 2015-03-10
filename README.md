# Bootstrap_sp
Version de bootstrap compiler par Steph81

* Correctifs visuels diverses.
* Systéme de grille à 24 colonnes pour la classe col-lg, col-md, col-sm et 12 colonnes pour col-xs.
* Ajout du bouton noir btn-inverse et violet btn-purple.
* Remplacement des Glyphicons icones par Font Awesome icones v4.3.0.
* Ajout des sous-menu dans le dropdowns.
* Ajout de 7 couleurs aux badges et 2 au label.

Lien Packagist : https://packagist.org/packages/twitter/bootstrap_sp

##Intégration dans Symfony :
modification du fichier app/config/config.yml
```yml
# Assetic Configuration
assetic:
    ...
    assets:
        bootstrap_js:
            inputs:
                - https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/js/bootstrap.min.js
        bootstrap_css:
            inputs:
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/css/bootstrap.min.css
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/css/bootstrap-theme.min.css
            filters: [cssrewrite]
            
        bootstrap_fontawesome_ttf:
            inputs:
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/fonts/fontawesome-webfont.ttf
            output: "fonts/fontawesome-webfont.ttf"
        bootstrap_fontawesome_eot:
            inputs:
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/fonts/fontawesome-webfont.eot
            output: "fonts/fontawesome-webfont.eot"
        bootstrap_fontawesome_svg:
            inputs:
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/fonts/fontawesome-webfont.svg
            output: "fonts/fontawesome-webfont.svg"
        bootstrap_fontawesome_woff:
            inputs:
                - %kernel.root_dir%/../vendor/twitter/bootstrap_sp/fonts/fontawesome-webfont.woff
            output: "fonts/fontawesome-webfont.woff"
```

Dans les templates :
```twig
<head>
    ...
    {% block stylesheets %}
    	{% stylesheets '@bootstrap_css' %}
    		<link rel="stylesheet" type="text/css" href="{{ asset_url }}"/>
    	{% endstylesheets %}
    	<!-- HTML5 Shim et Respond.js permet à IE8 de supporter les éléments du HTML5 -->
    	<!--[if lt IE 9]>
    		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    	<![endif]-->
    {% endblock %}
    ...
</head>
<body>
    ...
    {% block javascripts %}
		{% javascripts '@bootstrap_js' %}
			<script src="{{ asset_url }}" type="text/javascript"></script>
		{% endjavascripts %}
		{# <script src="js/main.js"></script> #}
	{% endblock %}
	...	
</body>
```
