public with sharing class hello
{
 @AuraEnabled
    public static String getname()
    {
        String name='Hello';
        system.debug('Hello'+name);
        return name;
    }
}