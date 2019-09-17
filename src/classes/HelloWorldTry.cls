public with sharing class HelloWorldTry {
@AuraEnabled
    public static String Test()
    {
        String name='Hello';
        system.debug('Hello'+name);
        return name;
    }
}