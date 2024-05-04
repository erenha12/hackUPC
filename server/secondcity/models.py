# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


# class AuthGroup(models.Model):
#     name = models.CharField(unique=True, max_length=150)

#     class Meta:
#         managed = False
#         db_table = 'auth_group'


# class AuthGroupPermissions(models.Model):
#     id = models.BigAutoField(primary_key=True)
#     group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
#     permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

#     class Meta:
#         managed = False
#         db_table = 'auth_group_permissions'
#         unique_together = (('group', 'permission'),)


# class AuthPermission(models.Model):
#     name = models.CharField(max_length=255)
#     content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
#     codename = models.CharField(max_length=100)

#     class Meta:
#         managed = False
#         db_table = 'auth_permission'
#         unique_together = (('content_type', 'codename'),)


# class AuthUser(models.Model):
#     password = models.CharField(max_length=128)
#     last_login = models.DateTimeField(blank=True, null=True)
#     is_superuser = models.IntegerField()
#     username = models.CharField(unique=True, max_length=150)
#     first_name = models.CharField(max_length=150)
#     last_name = models.CharField(max_length=150)
#     email = models.CharField(max_length=254)
#     is_staff = models.IntegerField()
#     is_active = models.IntegerField()
#     date_joined = models.DateTimeField()

#     class Meta:
#         managed = False
#         db_table = 'auth_user'


# class AuthUserGroups(models.Model):
#     id = models.BigAutoField(primary_key=True)
#     user = models.ForeignKey(AuthUser, models.DO_NOTHING)
#     group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

#     class Meta:
#         managed = False
#         db_table = 'auth_user_groups'
#         unique_together = (('user', 'group'),)


# class AuthUserUserPermissions(models.Model):
#     id = models.BigAutoField(primary_key=True)
#     user = models.ForeignKey(AuthUser, models.DO_NOTHING)
#     permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

#     class Meta:
#         managed = False
#         db_table = 'auth_user_user_permissions'
#         unique_together = (('user', 'permission'),)


class Cities(models.Model):
    city = models.TextField(db_column='city', blank=True, null=True)
    country = models.TextField(db_column="country", blank=True, null=True)
    mealinexpensive = models.FloatField(db_column='MealInexpensive', blank=True, null=True)  # Field name made lowercase.
    meal2people = models.FloatField(db_column='Meal2People', blank=True, null=True)  # Field name made lowercase.
    mcmeal = models.FloatField(db_column='McMeal', blank=True, null=True)  # Field name made lowercase.
    beerdomesticrestaurant = models.FloatField(db_column='BeerDomesticRestaurant', blank=True, null=True)  # Field name made lowercase.
    beerimportedrestaurant = models.FloatField(db_column='BeerImportedRestaurant', blank=True, null=True)  # Field name made lowercase.
    cappucino = models.FloatField(db_column='Cappucino', blank=True, null=True)  # Field name made lowercase.
    coke = models.FloatField(db_column='Coke', blank=True, null=True)  # Field name made lowercase.
    water = models.FloatField(db_column='Water', blank=True, null=True)  # Field name made lowercase.
    milk = models.FloatField(db_column='Milk', blank=True, null=True)  # Field name made lowercase.
    bread = models.FloatField(db_column='Bread', blank=True, null=True)  # Field name made lowercase.
    rice = models.FloatField(db_column='Rice', blank=True, null=True)  # Field name made lowercase.
    eggs = models.FloatField(db_column='Eggs', blank=True, null=True)  # Field name made lowercase.
    cheese = models.FloatField(db_column='Cheese', blank=True, null=True)  # Field name made lowercase.
    chicken = models.FloatField(db_column='Chicken', blank=True, null=True)  # Field name made lowercase.
    beef = models.FloatField(db_column='Beef', blank=True, null=True)  # Field name made lowercase.
    apples = models.FloatField(db_column='Apples', blank=True, null=True)  # Field name made lowercase.
    banana = models.FloatField(db_column='Banana', blank=True, null=True)  # Field name made lowercase.
    oranges = models.FloatField(db_column='Oranges', blank=True, null=True)  # Field name made lowercase.
    tomato = models.FloatField(db_column='Tomato', blank=True, null=True)  # Field name made lowercase.
    potato = models.FloatField(db_column='Potato', blank=True, null=True)  # Field name made lowercase.
    onion = models.FloatField(db_column='Onion', blank=True, null=True)  # Field name made lowercase.
    lettuce = models.FloatField(db_column='Lettuce', blank=True, null=True)  # Field name made lowercase.
    water_1 = models.FloatField(db_column='Water.1', blank=True, null=True)  # Field name made lowercase. Field renamed to remove unsuitable characters.
    wine = models.FloatField(db_column='Wine', blank=True, null=True)  # Field name made lowercase.
    beerdomesticmarket = models.FloatField(db_column='BeerDomesticMarket', blank=True, null=True)  # Field name made lowercase.
    beerimportedmarket = models.FloatField(db_column='BeerImportedMarket', blank=True, null=True)  # Field name made lowercase.
    cigarettes = models.FloatField(db_column='Cigarettes', blank=True, null=True)  # Field name made lowercase.
    localtransport1way = models.FloatField(db_column='LocalTransport1Way', blank=True, null=True)  # Field name made lowercase.
    monthlypass = models.FloatField(db_column='MonthlyPass', blank=True, null=True)  # Field name made lowercase.
    taxistart = models.FloatField(db_column='TaxiStart', blank=True, null=True)  # Field name made lowercase.
    taxi1km = models.FloatField(db_column='Taxi1km', blank=True, null=True)  # Field name made lowercase.
    taxi1hrwaiting = models.FloatField(db_column='Taxi1hrWaiting', blank=True, null=True)  # Field name made lowercase.
    gasoline = models.FloatField(db_column='Gasoline', blank=True, null=True)  # Field name made lowercase.
    carvolkswagengolf = models.FloatField(db_column='CarVolkswagenGolf', blank=True, null=True)  # Field name made lowercase.
    cartoyotacorolla = models.FloatField(db_column='CarToyotaCorolla', blank=True, null=True)  # Field name made lowercase.
    utility = models.FloatField(db_column='Utility', blank=True, null=True)  # Field name made lowercase.
    prepaidmobile = models.FloatField(db_column='PrepaidMobile', blank=True, null=True)  # Field name made lowercase.
    internetandmobile = models.FloatField(db_column='InternetAndMobile', blank=True, null=True)  # Field name made lowercase.
    fitnessclub = models.FloatField(db_column='FitnessClub', blank=True, null=True)  # Field name made lowercase.
    tenniscourtrent = models.FloatField(db_column='TennisCourtRent', blank=True, null=True)  # Field name made lowercase.
    cinema = models.FloatField(db_column='Cinema', blank=True, null=True)  # Field name made lowercase.
    preschool = models.FloatField(db_column='Preschool', blank=True, null=True)  # Field name made lowercase.
    primaryschool = models.FloatField(db_column='PrimarySchool', blank=True, null=True)  # Field name made lowercase.
    jeans = models.FloatField(db_column='Jeans', blank=True, null=True)  # Field name made lowercase.
    summerdress = models.FloatField(db_column='SummerDress', blank=True, null=True)  # Field name made lowercase.
    nikerunningshoes = models.FloatField(db_column='NikeRunningShoes', blank=True, null=True)  # Field name made lowercase.
    leatherbusinessshoes = models.FloatField(db_column='LeatherBusinessShoes', blank=True, null=True)  # Field name made lowercase.
    apt1bedroomcityctr = models.FloatField(db_column='Apt1BedroomCityCtr', blank=True, null=True)  # Field name made lowercase.
    apt1bedroomnocityctr = models.FloatField(db_column='Apt1BedroomNoCityCtr', blank=True, null=True)  # Field name made lowercase.
    apt3bedroomcityctr = models.FloatField(db_column='Apt3BedroomCityCtr', blank=True, null=True)  # Field name made lowercase.
    apt3bedroomnocityctr = models.FloatField(db_column='Apt3BedroomNoCityCtr', blank=True, null=True)  # Field name made lowercase.
    pricepersqmtcityctr = models.FloatField(db_column='PricePerSqMtCityCtr', blank=True, null=True)  # Field name made lowercase.
    pricepersqmtnocityctr = models.FloatField(db_column='PricePerSqMtNoCityCtr', blank=True, null=True)  # Field name made lowercase.
    avgmonthlynetsalary = models.FloatField(db_column='AvgMonthlyNetSalary', blank=True, null=True)  # Field name made lowercase.
    mortgageinterest = models.FloatField(db_column='MortgageInterest', blank=True, null=True)  # Field name made lowercase.
    data_quality = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'cities'


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    #user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    id = models.BigAutoField(primary_key=True)
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'
