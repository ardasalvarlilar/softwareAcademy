from django.contrib import admin
from .models import City, Day, TimeSlot, EduProgram

class EduProgramAdmin(admin.ModelAdmin):
    list_display = ('title', 'quota', 'price', 'city', 'get_days_display', 'get_time_slots_display')
    list_filter = ('days', 'time_slots')
    
    def get_days_display(self, obj):
        return ", ".join([day.name for day in obj.days.all()])
    
    def get_time_slots_display(self, obj):
        return ", ".join([f"{slot.start_time} - {slot.end_time}" for slot in obj.time_slots.all()])
    
    get_days_display.short_description = 'Days'
    get_time_slots_display.short_description = 'Time Slots'


class DayAdmin(admin.ModelAdmin):
    list_display = ('name',)

class TimeSlotAdmin(admin.ModelAdmin):
    list_display = ('start_time', 'end_time')

admin.site.register(City)
admin.site.register(Day, DayAdmin)
admin.site.register(TimeSlot, TimeSlotAdmin)
admin.site.register(EduProgram, EduProgramAdmin)
