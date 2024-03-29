# Generated by Django 3.2.20 on 2023-09-28 09:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20230928_0957'),
        ('users', '0002_auto_20230928_0614'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='rel_kuma001_1_1',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_rel_kuma001_1_1', to='home.kuma001'),
        ),
        migrations.AddField(
            model_name='user',
            name='rel_salar_1_n',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user_rel_salar_1_n', to='home.salar'),
        ),
    ]
