# Generated by Django 3.2.20 on 2023-09-28 09:57

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('home', '0003_salar'),
    ]

    operations = [
        migrations.AddField(
            model_name='kuma001',
            name='rel_user_1_1',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='kuma001_rel_user_1_1', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='kuma001',
            name='rel_user_n_n',
            field=models.ManyToManyField(blank=True, null=True, related_name='kuma001_rel_user_n_n', to=settings.AUTH_USER_MODEL),
        ),
    ]
