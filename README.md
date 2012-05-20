dojo-java-boilerplate
=====================

Gives an example layout of a Java web application using dojo. In this example the dojo-build system is triggerd via maven plugins, making it simple to make a release of the application. 

Before you start

1. You must install dojo-source in to your maven repository, this can be done by the following command. If you use a centralized repository for your projects (eg nexus) this would be a good place to install the dojo source. 
    mvn install:install-file -DgroupId=org.dojotoolkit -DartifactId=dojo -Dversion=1.7.2 -Dclassifier=sources -Dpackaging=zip -Dfile=dojo-release-1.7.2-src.zip

Run application locally
=====================
Use the jetty-profile to run the project locally:

    mvn -Pjetty

Build a release (war)
=====================
Build the release with regualr maven build system:

    mvn clean install
    
    
    
Layers
=====================

In development the layers are defined but the content is empty. The content is replaced when the project is released. This enables us to use the same code in development and production. 

