package com.example.themghsapp;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;


import java.util.List;

public class ServicesAdapter extends RecyclerView.Adapter<servicesRecyclerView> {

    Context context;

    List<ServicesRecyclerItem> items;

    public ServicesAdapter(Context context, List<ServicesRecyclerItem> items) {
        this.context = context;
        this.items = items;
    }

    @NonNull
    @Override
    public servicesRecyclerView onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        // Create a new view, which defines the UI of the list item
        return new servicesRecyclerView(LayoutInflater.from(context).inflate(R.layout.service_view, parent, false));
    }



    @Override
    public void onBindViewHolder(@NonNull servicesRecyclerView holder, int position) {
        // Get element from your dataset at this position and replace the
        // contents of the view with that element
        holder.nameView.setText(items.get(position).name);
        holder.descriptionView.setText(items.get(position).description);
        holder.imageView.setImageResource(items.get(position).image);


    }

    @Override
    public int getItemCount() {
        // Return the size of your dataset (invoked by the layout manager)
        return items.size();
    }
}
