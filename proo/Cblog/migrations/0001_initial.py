# Generated by Django 3.1.2 on 2020-12-24 13:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40)),
                ('password', models.CharField(max_length=40)),
                ('email', models.EmailField(max_length=250)),
                ('roll', models.IntegerField(max_length=20)),
                ('year', models.IntegerField()),
            ],
        ),
    ]