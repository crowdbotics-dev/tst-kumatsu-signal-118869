# Generated by Django 3.2.20 on 2023-09-28 06:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Kuma001',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('signal1', models.CharField(max_length=220)),
                ('signal2', models.BigIntegerField(blank=True, null=True)),
                ('singal3', models.EmailField(blank=True, max_length=254, null=True)),
            ],
        ),
    ]
