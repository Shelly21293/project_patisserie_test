from rest_framework import serializers
from base.models.loanModel import Loan


class LoanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Loan
        fields = ('_id', 'desc', 'price')
 
    def getLoan(self,obj):
        return {
                "id":obj._id,
                "customer":obj.customer.username,
                "book":obj.book.name,
                "Loan_Date":obj.Loan_Date,
                "Return_Date":obj.Return_Date,
            }