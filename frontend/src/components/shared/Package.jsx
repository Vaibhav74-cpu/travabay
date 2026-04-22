import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

function Package({ pkg }) {
  return (
    <Link to={`/package/${pkg._id}`}>
      <Card key={pkg._id} className="border  border-white">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-48 w-full object-cover"
        />
        <CardHeader>
          <CardTitle>{pkg.title}</CardTitle>
          <CardDescription>{pkg.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>₹{pkg.price}</p>
          <p>{pkg.duration}</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default Package;
