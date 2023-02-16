module.exports = (mongoose) => {
  const Transaction = mongoose.model(
    'transactions',
    mongoose.Schema(
      {
        amount: String,
        date: String,
        merchant: String,
        category: String,
        description: String,
        account: String,
        taxRelated: String
      },
      { timestamps: true }
    )
  );

  return Transaction;
};
